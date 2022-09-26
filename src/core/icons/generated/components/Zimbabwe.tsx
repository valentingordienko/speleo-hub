import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Zimbabwe.svg';

export function Zimbabwe(props: TProps) {
  return (
    <Icon {...props} name="Zimbabwe">
      <SVG />
    </Icon>
  );
}
