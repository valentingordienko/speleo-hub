import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Zimbabwe.svg';

export function Zimbabwe(props: TBaseProps) {
  return (
    <Icon {...props} name="Zimbabwe">
      <SVG />
    </Icon>
  );
}
