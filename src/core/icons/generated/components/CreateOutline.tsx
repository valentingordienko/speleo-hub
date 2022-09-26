import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateOutline.svg';

export function CreateOutline(props: TProps) {
  return (
    <Icon {...props} name="CreateOutline">
      <SVG />
    </Icon>
  );
}
