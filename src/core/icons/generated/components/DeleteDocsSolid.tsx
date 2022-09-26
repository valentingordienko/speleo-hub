import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocsSolid.svg';

export function DeleteDocsSolid(props: TProps) {
  return (
    <Icon {...props} name="DeleteDocsSolid">
      <SVG />
    </Icon>
  );
}
