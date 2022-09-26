import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Pakistan.svg';

export function Pakistan(props: TProps) {
  return (
    <Icon {...props} name="Pakistan">
      <SVG />
    </Icon>
  );
}
