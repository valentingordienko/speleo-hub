import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LoaderSolid.svg';

export function LoaderSolid(props: TProps) {
  return (
    <Icon {...props} name="LoaderSolid">
      <SVG />
    </Icon>
  );
}
